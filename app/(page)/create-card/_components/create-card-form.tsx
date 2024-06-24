'use client';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { z } from 'zod';

const FormSchema = z.object({
	title: z.string().min(1, { message: '1자 이상 적어주세요' }).max(12, { message: '최대 12자 까지 입니다.' }),
	desc: z.string().min(1, { message: '1자 이상 적어주세요' }).max(30, { message: '최대 50자 까지 입니다.' }),
	file: z.string().nullable(),
});

type CreateCardForm = z.infer<typeof FormSchema>;
interface CreateCardFormType {
	name: keyof CreateCardForm;
	label: string;
	type: string;
	placeholder: string;
}

interface CreateFormProps {
	cardTitle: string;
	cardDesc: string;
	imageUrl: string;
	setCardTitle: React.Dispatch<React.SetStateAction<string>>;
	setCardDesc: React.Dispatch<React.SetStateAction<string>>;
	setImageUrl: React.Dispatch<React.SetStateAction<string>>;
	setImageFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export function CreateCardForm({ setImageUrl, setImageFile, setCardTitle, setCardDesc, cardTitle, cardDesc, imageUrl }: CreateFormProps) {
	const form = useForm<CreateCardForm>({
		mode: 'onBlur',
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: '',
			desc: '',
			file: null,
		},
	});

	// 파일url
	const handlerImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;
		const file = e.target.files[0];
		if (file) {
			let image = window.URL.createObjectURL(file);
			console.log(image);
			setImageUrl(image);
			setImageFile(file);
		}
	};

	// 파일url
	const handleImageDelete = () => {
		form.setValue('file', '');
		setImageUrl('');
		setImageFile(null);
	};

	const formFields: CreateCardFormType[] = [
		{
			name: 'title',
			label: '카드이름',
			type: 'text',
			placeholder: '카드 이름을 지어주세요. 최대(12자)',
		},
		{
			name: 'desc',
			label: '카드정보',
			type: 'textarea',
			placeholder: '내용을 적어주세요. 최대(50자)',
		},
		{
			name: 'file',
			label: '이미지첨부',
			type: 'file',
			placeholder: '내용을 적어주세요. 최대(50자)',
		},
	];

	async function onSubmit(value: CreateCardForm) {}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
				{formFields &&
					formFields.map((value, i) => (
						<FormField
							key={i}
							control={form.control}
							name={value.name}
							render={({ field }) => (
								<FormItem>
									{value.name !== 'file' && (
										<FormLabel className='text-base' htmlFor={value.name}>
											{value.label}
										</FormLabel>
									)}
									{value.name === 'file' && (
										<FormLabel
											className='absolute top-0 right-0 w-[250px] h-[250px] bg-white z-10 flex items-center justify-center bg-contain bg-white bg-center bg-no-repeat'
											htmlFor={value.name}
											style={{ backgroundImage: `url(${imageUrl})` }}
										></FormLabel>
									)}
									<FormControl>
										<>
											{value.type === 'text' && (
												<div className='relative overflow-hidden rounded-lg'>
													<Input
														id={value.name}
														placeholder={value.placeholder}
														{...field}
														className='text-black pr-[100px]'
														value={cardTitle}
														onChange={e => {
															setCardTitle(e.target.value.slice(0, 12));
														}}
													/>
													<span className='absolute right-0 top-0 text-black bg-orange-200 h-full px-5 flex items-center justify-center'>
														{cardTitle.length}/12
													</span>
												</div>
											)}
											{value.type === 'textarea' && (
												<div className='relative overflow-hidden rounded-lg'>
													<Textarea
														id={value.name}
														placeholder={value.placeholder}
														{...field}
														className='text-black h-[123px]'
														value={cardDesc}
														onChange={e => setCardDesc(e.target.value.slice(0, 30))}
													/>
													<span className='absolute right-0 top-0 text-black bg-orange-200 h-full px-5 flex items-center justify-center'>
														{cardTitle.length}/50
													</span>
												</div>
											)}
											{value.type === 'file' && (
												<>
													<div className='absolute right-0 top-0 w-[240px] h-[240px]-z-0'>
														<Input id='file' type='file' accept='image/*' className='h-full' onChange={e => handlerImageUrl(e)} />
													</div>
													<button type='button' className='absolute right-1 top-0 z-10 p-2' onClick={handleImageDelete}>
														{/* bg-transparent  */}
														<IoCloseCircleOutline color={'black'} className='w-8 h-8 p-0 text-lg' />
													</button>
												</>
											)}
										</>
									</FormControl>
									<FormMessage className='absolute left-0 -bottom-[26px]' />
								</FormItem>
							)}
						/>
					))}
				{/* <div className='pt-8'>
      <Button type='submit'></Button>
    </div> */}
			</form>
		</Form>
	);
}
