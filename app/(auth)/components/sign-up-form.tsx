'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { SIGN_UP_POST } from '@/api/api.constant';
import { authApi } from '@/api/auth.api';
import { useState } from 'react';
import { PiEyeClosedThin } from 'react-icons/pi';
import { PiEyeThin } from 'react-icons/pi';
import {
	EMAIL_INVALID_FORMAT,
	EMAIL_PLACEHOLDER,
	PASSWORD_PLACEHOLDER,
	PASSWORD_TOO_SHORT,
	USERNAME_PLACEHOLDER,
	USER_NAME_TOO_SHORT,
} from '@/constants/auth';
import { useRouter } from 'next/navigation';

const FormSchema = z.object({
	email: z.string().email(EMAIL_INVALID_FORMAT),
	nickname: z.string().min(1, USER_NAME_TOO_SHORT),
	password: z.string().min(8, PASSWORD_TOO_SHORT),
	passwordConfirm: z.string().min(8, PASSWORD_TOO_SHORT),
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

const INITIAL_VALUE = ''; // input 초기값

export function SignUpForm() {
	const router = useRouter();
	const [isPasswordVisible, setIsPasswordVisible] = useState<Boolean>(true); // password
	const [isPasswordVisible2, setIsPasswordVisible2] = useState<Boolean>(true); // passwordConfirm
	const form = useForm<SignUpFormType>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: INITIAL_VALUE,
			nickname: INITIAL_VALUE,
			password: INITIAL_VALUE,
			passwordConfirm: INITIAL_VALUE,
		},
	});

	const handlePasswordMatch = (password: string, passwordConfirm: string) => {
		// password 확인
		return password === passwordConfirm;
	};

	async function onSubmit(value: SignUpFormType) {
		if (!handlePasswordMatch(value.password, value.passwordConfirm)) {
			form.setError('password', { message: '비밀번호가 다릅니다.' });
			form.setError('passwordConfirm', { message: '비밀번호가 다릅니다.' });
		}
		try {
			const res = await authApi.post(SIGN_UP_POST, {
				email: value.email,
				nickname: value.nickname,
				password: value.password,
			});
			toast.error('가입 되셨습니다~');
			router.push('/sign-in');
		} catch (e: any) {
			if (e.response && e.response.data && e.response.data.message) {
				toast.error(e.response.data.message);
			} else {
				toast.error('전송 실패');
			}
			console.error('전송 실패');
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
			name: 'nickname',
			label: '닉네임',
			type: 'text',
			placeholder: USERNAME_PLACEHOLDER,
		},
		{
			name: 'password',
			label: '비밀번호',
			type: isPasswordVisible ? 'text' : 'password',
			placeholder: PASSWORD_PLACEHOLDER,
			password: true,
			onClick: () => setIsPasswordVisible(prev => !prev),
		},
		{
			name: 'passwordConfirm',
			label: '비밀번호 확인',
			type: isPasswordVisible2 ? 'text' : 'password',
			placeholder: PASSWORD_PLACEHOLDER,
			password: true,
			onClick: () => setIsPasswordVisible2(prev => !prev),
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
									{(value.name === 'password' && isPasswordVisible) || (value.name === 'passwordConfirm' && isPasswordVisible2) ? (
										<PiEyeThin color='black' className='text-lg h-10' />
									) : (
										<PiEyeClosedThin color='black' className='text-lg h-10' />
									)}
								</Button>
							)}
						</div>
					))}
				<div className='pt-8'>
					<Button type='submit'>가입하기</Button>
				</div>
			</form>
		</Form>
	);
}
