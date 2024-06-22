import Link from 'next/link';
import { SignInForm } from '../components/sign-in-form';

export default function SignIn() {
	return (
		<>
			<h1 className='text-5xl mb-10 font-bold'>Pokemon Cards</h1>
			<SignInForm />
			<Link href='/sign-up' className='mt-4 underline'>
				회원가입
			</Link>
		</>
	);
}
