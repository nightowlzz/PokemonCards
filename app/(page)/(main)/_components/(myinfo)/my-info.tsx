import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';

const font = 'GangwonEduPowerExtraBoldA , TAEBAEKfont, YangjuByeolsanA1,  Arial, Verdana, Tahoma, Segoe UI, Calibri, sans-serif';

export function MyInfo() {
	return (
		<div className='flex-1'>
			<h1
				className='text-3xl leading-normal animate-move-right'
				style={{
					fontFamily: font,
				}}
			>
				Pokemon Cards &<br />
				Create Card
			</h1>
			<ul className='pt-10 animate-move-right delay-100'>
				<li className='flex items-center'>
					<span className=''>Creator</span> : 🤗 kim mi so @ 2024 |
					<Link
						href={'https://github.com/nightowlzz/PoketmonCards'}
						target='_blank'
						className='flex items-center ml-2 text-[#42dbf0] underline italic'
					>
						<FiGithub className='mr-2' />
						nightowlzz
					</Link>
				</li>
				<li>
					<span className=''>Skill</span> : next.js(App) | axios | html2canvas
				</li>
				<li>
					<span className=''>Css</span> : tailwind css | scss module | ui shadcn
				</li>
				<li>
					<span className=''>API</span> :
					<Link href='https://tcgdex.dev/' target='_blank' className='text-[white] underline italic'>
						tcgdex
					</Link>
				</li>
			</ul>
			<div className='mt-10 animate-move-right delay-200'>
				<h2 className='text-xl font-bold pb-2'>사이트 소개</h2>
				<hr />
				<p className='py-4'>
					<strong className='text-[#42dbf0]'>포켓몬 API를 이용해 카드를 구경하고 검색</strong>할 수 있습니다. <br />
					그리고 <strong className='text-[#42dbf0]'>나만의 카드를 만들어 다운로드</strong>해 보세요. <br />
					저장되는 데이터는 없으니 걱정하지 않으셔도 됩니다. <br />
					<strong className='text-[#42dbf0]'>&quot;카드 만들기&ldquo;</strong>를 클릭해 주세요!
					<br />
					<Button asChild>
						<Link href={'create-card'} className='mt-8 w-full bg-orange-500 font-bold hover:bg-orange-600'>
							카드 만들기
						</Link>
					</Button>
					<span className='block pt-10 text-sm text-white/50'>
						이 웹사이트는 PC에서 사용하기에 최적화되어 있으며, Chrome 브라우저에 가장 적합하게 설계되었습니다.
					</span>
				</p>
				<p className='pt-2 text-sm border-t text-white/30'>이 웹사이트는 상업적 목적이 아닌 포트폴리오 용도로 제작되었습니다.</p>
			</div>
		</div>
	);
}
