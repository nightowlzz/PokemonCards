'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { SIGN_IN_POST } from '@/api/api.constant';
import { authApi } from '@/api/auth.api';
import { useRouter } from 'next/navigation';
import { setAccessToken } from '@/utils/cookie';
import { EMAIL_INVALID_FORMAT, EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER, PASSWORD_TOO_SHORT } from '@/constants/auth';
import { useState } from 'react';
import { PiEyeClosedThin, PiEyeThin } from 'react-icons/pi';

const FormSchema = z.object({
	email: z.string().email(EMAIL_INVALID_FORMAT),
	password: z.string().min(8, PASSWORD_TOO_SHORT),
});

type SignUpFormType = z.infer<typeof FormSchema>;
interface SignUpFormInputType {
	name: keyof SignUpFormType;
	label: string;
	placeholder: string;
	type: string;
	password?: boolean;
	onClick?: () => void;
}

export function SignInForm() {
	const router = useRouter();
	const [isPasswordVisible, setIsPasswordVisible] = useState<Boolean>(true); // password
	const form = useForm<SignUpFormType>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '123123@email.com',
			password: '123123qq',
		},
	});

	async function onSubmit(value: SignUpFormType) {
		try {
			const { data } = await authApi.post(SIGN_IN_POST, {
				email: value.email,
				password: value.password,
			});
			// cookie 저장
			await setAccessToken(data.token);
			router.replace('/');
		} catch (e: any) {
			if (e.response && e.response.data && e.response.data.message) {
				toast.error(e.response.data.message);
			} else {
				toast.error('전송 실패');
			}
			console.error(e);
		}
	}

	const formFields: SignUpFormInputType[] = [
		{
			name: 'email',
			label: '이메일',
			type: 'email',
			placeholder: EMAIL_PLACEHOLDER,
		},
		{
			name: 'password',
			label: '비밀번호',
			type: isPasswordVisible ? 'text' : 'password',
			placeholder: PASSWORD_PLACEHOLDER,
			password: true,
			onClick: () => setIsPasswordVisible(prev => !prev),
		},
	];

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
				{formFields &&
					formFields.map((value, i) => (
						<div key={i} className='relative pt-2'>
							<FormField
								control={form.control}
								name={value.name}
								render={({ field }) => (
									<FormItem>
										<FormLabel className='text-base'>{value.label}</FormLabel>
										<FormControl>
											<Input type={value.type} placeholder={value.placeholder} {...field} />
										</FormControl>
										<FormMessage className='absolute left-0 -bottom-[26px]' />
									</FormItem>
								)}
							/>
							{value.password && (
								<Button
									value={'link'}
									size={'icon'}
									onClick={value.onClick}
									type='button'
									className='bg-transparent hover:bg-transparent absolute bottom-0 right-1'
								>
									{value.name === 'password' && isPasswordVisible ? (
										<PiEyeThin color='black' className='text-lg h-10' />
									) : (
										<PiEyeClosedThin color='black' className='text-lg h-10' />
									)}
								</Button>
							)}
						</div>
					))}
				<div className='pt-8'>
					<Button type='submit'>로그인 하기</Button>
				</div>
			</form>
		</Form>
	);
}
