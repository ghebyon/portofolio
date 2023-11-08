import Image from 'next/image'
import Navigation from './_component/Navigation'
import SocialMedia from './_component/SocialMedia'
import AboutDetails from './_component/AboutDetails'
import SkillItem from './_component/SkillItem'
import DownloadCV from './_component/DownloadCV'
import HireButton from './_component/HireButton'
import SkillCard from './_component/SkillCard'
import EduItem from './_component/EduItem'

export default function Home() {
  return (
    <>
      <main className=' flex justify-between font-sans'>
        <div className=' sidebar sticky top-0 overflow-y-auto bg-white h-screen w-1/6 shadow-md flex flex-col justify-start items-center p-4 divide-y gap-2'>
          <div className='profile pt-4 flex flex-col gap-2 items-center text-center'>
            <Image src="https://storage.googleapis.com/gwencanayo123.appspot.com/profile/profile-image.png" width={100} height={100} alt="" className=' drop-shadow-md'/>
            <p className=' text-xs font-semibold tracking-wider pt-1'>Ghebyon Tohada Nainggolan</p>
            <SocialMedia />
          </div>
          <div className='about flex flex-col gap-1 py-2 w-full '>
            <AboutDetails keyText="Age" value="20" />
            <AboutDetails keyText="Residence" value="Bandung" />
            <AboutDetails keyText="Freelance" value="Available" valueStyle="text-green-500"/>
            <AboutDetails keyText="Country" value="Indonesia" />
          </div>
          <div className='languages flex flex-col gap-1 py-2 w-full'>
            <p className=' text-sm font-medium'>Languages</p>
            <SkillItem type={`basic`} skill={`Bahasa`} rate={100}/>
            <SkillItem type={`basic`} skill={`English`} rate={80}/>
          </div>   
          <div className='skills flex flex-col gap-1 py-2 w-full'>
            <p className=' text-sm font-medium'>Skills</p>
            <SkillItem type={`basic`} skill={`HTML`} rate={90}/>
            <SkillItem type={`basic`} skill={`CSS`} rate={85}/>
            <SkillItem type={`basic`} skill={`Js`} rate={80}/>
            <SkillItem type={`basic`} skill={`Cloud Comp.`} rate={75}/>
            <SkillItem type={`basic`} skill={`Python`} rate={85}/>
          </div>
          <div className='extra-skills flex flex-col gap-1 py-2 w-full'>
            <p className=' text-sm font-medium'>Extra Skills</p>
            <SkillItem type={`extra`} skill={`Google Cloud Platform`}/>
            <SkillItem type={`extra`} skill={`Next JS, React JS`}/>
            <SkillItem type={`extra`} skill={`Tailwind`}/>
            <SkillItem type={`extra`} skill={`GIT Knowledge`}/>
          </div>
          <div>
            <DownloadCV />
          </div>
        </div>
        <div className='content  w-full px-4'>
          <section className=' w-full bg-white drop-shadow-md'>
            <div className='  flex  px-8 pt-4 items-center gap-2'>
              <div className=' flex flex-col text-customBlack w-8/12 pb-4'>
                <p className=' text-3xl font-bold tracking-wide'>{`I'm Ghebyon Nainggolan`}</p>
                <p className=' text-3xl font-bold tracking-wide'>System Architect & Cloud Engineer</p>
                <p className=' text-sm py-4'>I am a seasoned Cloud Engineer and System Architect with over 1 year of experience in the technology industry. I excel in managing cloud infrastructure and designing innovative solutions for various projects. My skill set includes mastery of cloud platforms like AWS, Azure, and Google Cloud, as well as developing robust and scalable system architectures.</p>
                <HireButton />
              </div>
              <aside>
                <Image src="https://storage.googleapis.com/gwencanayo123.appspot.com/profile/profile-image2.png" height={300} width={200}alt="" className=' drop-shadow-md'/>
              </aside>
            </div>
          </section>
          <section className='w-full pt-16 flex flex-col items-center text-customBlack'>
            <p className=' text-2xl font-bold'>My Service</p>
            <p className=' pt-4 w-1/3 text-center'>The service below are the service I offer to people who want to hire me</p>
            <div className=' w-full grid grid-cols-3 gap-4 py-8'>
              <SkillCard src="/system.png" skill="System Design" desc="Designing system (Infra, Arch, etc) for your company"/>
              <SkillCard src="/project-manager.png" skill="Project Manager" desc="Conduct the Project, Scrum Master"/>
              <SkillCard src="/coding.png" skill="Web Development" desc="Blog, E-commerce"/>
              <SkillCard src="/mobile-dev.png" skill="Mobile-app Development" desc="E-commerce, etc"/>
              <SkillCard src="/illustration.png" skill="UI/UX Design" desc="Mobile App, Website Design"/>
              <SkillCard skill="Endorse" desc="I also give you the opportunity to introduce your application. I can promote it"/>
            </div>
          </section>
          <section className='w-full pt-16 flex flex-col items-center text-customBlack'>
            <p className=' text-2xl font-bold'>Education</p>
            <p className=' pt-4 w-1/3 text-center'>It is possible that I will continue my studies</p>
            <div className=' bg-white flex flex-col divide-y p-2 my-8'> 
              <EduItem institute="Bandung Institute of Technology" status="On going" role="Undergraduate Student" desc="I am a Computer Science student at ITB, dedicated to exploring technology and problem-solving. I thrive in the dynamic academic environment, eager to make a positive impact in the IT field through innovation"/>
              <EduItem institute="Bangkit Academy" status="On going" role="Student" desc="As a Bangkit Academy student specializing in Cloud Computing with Google Cloud Platform (GCP), I am an enthusiastic learner ready to tackle technological challenges. With intensive guidance and training, I have expanded my knowledge in managing and optimizing cloud infrastructure with GCP. I am prepared to contribute and innovate in projects leveraging cloud technology to achieve remarkable results"/>
              <EduItem institute="SMA Negeri 2 Asrama Soposurung" status="Graduated" role="Undergraduate Student" desc="I was a student at SMA Negeri 2 Asrama Yayasan Sopsurung, a semi-military high school, where discipline and academic excellence are instilled. I am committed to both my studies and personal growth, embracing the unique challenges and opportunities this environment offers"/>
            </div>
          </section>
          <section className='w-full pt-16 flex flex-col items-center text-customBlack'>
            <p className=' text-2xl font-bold'>Certification</p>
            <div className=' bg-white w-full flex flex-col divide-y p-2 my-8'> 
              <EduItem institute="System Administration and IT Infrastructure Services" status="Finished" role="Coursera" link={true}/>
              <EduItem institute="The Bits and Bytes of Computer Networking" status="Finished" role="Coursera" link={true}/>
              <EduItem institute="Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud" status="Finished" role="Dicoding" link={true}/>
              <EduItem institute="Belajar Dasar Pemrograman JavaScript" status="Finished" role="Dicoding" link={true}/>
              <EduItem institute="Belajar Dasar Pemrograman Web" status="Finished" role="Dicoding" link={true}/>
            </div>
          </section>
          <section className='w-full pt-16 flex flex-col items-center text-customBlack'>
            <p className=' text-2xl font-bold'>Cloud Skill Boost Badges</p>
            <div className=' w-full grid grid-cols-3 gap-4 py-8'>
              <Image src='https://storage.googleapis.com/gwencanayo123.appspot.com/gcsb-badges/badge-5.png' width={480} height={480} alt=''/>
              <Image src='https://storage.googleapis.com/gwencanayo123.appspot.com/gcsb-badges/badge-4.png' width={480} height={480} alt=''/>
              <Image src='https://storage.googleapis.com/gwencanayo123.appspot.com/gcsb-badges/badge-3.png' width={480} height={480} alt=''/>
              <Image src='https://storage.googleapis.com/gwencanayo123.appspot.com/gcsb-badges/badge-2.png' width={480} height={480} alt=''/>
              <Image src='https://storage.googleapis.com/gwencanayo123.appspot.com/gcsb-badges/badge-1.png' width={480} height={480} alt=''/>
            </div>
          </section>
          <footer className='w-full bg-white shadow-md flex items-center justify-center '>
            <p className='p-4'>2023 | Copyright by : Ghebyon Tohada Nainggolan</p>
          </footer>
        </div>
        <Navigation />
      </main>
    </>
  )
}
