import SideNav from '@/app/ui/dashboard/sidenav';
import styles from '@/app/ui/home.module.css';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen ${styles.mainContainer} ${styles.body}`}>
      <div>
        <p className='text-center'>
          <button className={styles.menuItem}>Галерея</button>
          <button className={styles.menuItem}>Контакти</button>
          <button className={styles.menuItem}>Про нас</button>
        </p>
      </div>
      <div>
        {children}
      </div>
      <div></div>
    </div>
    // <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      // <div className="w-full flex-none md:w-64">
      //   <p>Test Nav</p>
      // </div>
    // </div>
  );
}