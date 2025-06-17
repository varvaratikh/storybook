import { Link, useLocation } from 'react-router-dom';
import styles from './breadcrumbs.module.scss';

export const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(Boolean);

    return (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
            <ol className={styles.list}>
                <li className={styles.item}>
                    <Link to="/" className={styles.link}>
                        Главная
                    </Link>
                </li>
                {pathnames.map((segment, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;
                    const label = decodeURIComponent(segment);

                    return (
                        <li key={to} className={styles.item}>
                            <span className={styles.separator}>/</span>
                            {isLast ? (
                                <span className={styles.current}>{label}</span>
                            ) : (
                                <Link to={to} className={styles.link}>
                                    {label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};