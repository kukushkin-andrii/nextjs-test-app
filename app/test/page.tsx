import Image from 'next/image';
import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    // <main className="flex flex-col p-6 bg-black justify-center items-center">
    // <main className={`text-center ${styles.glowOnHover}`}>
    <div className='flex flex-wrap justify-center items-center text-center'>
      <Image
        src="/IMG_2111.svg"
        width={600}
        height={220}
        className={`${styles.flex06} h-fit`}
        alt="Logo"
      />
      <p className={`${styles.text} ${styles.flex04}`}>Квіти що дарують емоції</p>
    </div>
    // </main>
  )
}
