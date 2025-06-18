import styles from './pagination.module.scss';

type PaginationProps = {
    onNextPageClick: () => void;
    onPrevPageClick: () => void;
    disable: {
        left: boolean;
        right: boolean;
    };
    nav?: {
        current: number;
        total: number;
    };
};

export const Pagination = ({
                               nav,
                               disable,
                               onNextPageClick,
                               onPrevPageClick,
                           }: PaginationProps) => {
    return (
        <div className={styles.paginator}>
            <button
                className={styles.arrow}
                type="button"
                onClick={onPrevPageClick}
                disabled={disable.left}
                aria-label="Previous page"
            >
                ‹
            </button>

            {nav && (
                <span className={styles.navigation}>
                    {nav.current} / {nav.total}
                </span>
            )}

            <button
                className={styles.arrow}
                type="button"
                onClick={onNextPageClick}
                disabled={disable.right}
                aria-label="Next page"
            >
                ›
            </button>
        </div>
    );
};
