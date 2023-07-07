import { range } from "../../helpers";
import styles from "./Pagination.module.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useMemo } from "react";

interface PaginationType {
  page: number;
  lastPage: number;
  handlePageChange: (page: number) => void;
}

const firstPage = 1;
const secondPage = 2;
const defaultCentarPage = 3;

const getPaginationCentarPageValue = (page: number, lastPage: number) => {
  if (page === firstPage || page === secondPage) {
    return defaultCentarPage;
  } else if (page === lastPage || page === lastPage - firstPage) {
    return lastPage - secondPage;
  }
  return page;
};

const calculateVisiblePagination = (centarPage: number) => {
  if (centarPage === firstPage)
    return range(centarPage, centarPage + secondPage, 1);
  if (centarPage === secondPage)
    return range(centarPage - firstPage, centarPage + secondPage, 1);
  return range(centarPage - secondPage, centarPage + secondPage, 1);
};

const Pagination: FC<PaginationType> = ({
  page,
  lastPage,
  handlePageChange,
}) => {
  const centarPage = useMemo(
    () => getPaginationCentarPageValue(page, lastPage),
    [page, lastPage]
  );
  const visiblePaginationOptions = useMemo(
    () => calculateVisiblePagination(centarPage),
    [centarPage]
  );

  return (
    <div className={styles.pagination}>
      <button
        aria-label={"Previous page"}
        className={`${styles.item} ${styles.inactivePage}`}
        disabled={page === firstPage}
        onClick={() => handlePageChange(page - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} color="white" size={"lg"} />
      </button>
      {visiblePaginationOptions.map((pageValue) => (
        <button
          key={pageValue}
          aria-label={"Pagination cell"}
          className={`${styles.item} ${
            pageValue === page ? styles.activePage : styles.inactivePage
          } `}
          onClick={() => handlePageChange(pageValue)}
        >
          {pageValue}
        </button>
      ))}
      <button
        aria-label={"Next page"}
        className={`${styles.item} ${styles.inactivePage}`}
        disabled={page === lastPage}
        onClick={() => handlePageChange(page + 1)}
      >
        <FontAwesomeIcon icon={faAngleRight} color="white" size={"lg"} />
      </button>
    </div>
  );
};

export default Pagination;
