import { range } from "../../helpers";
import styles from "./Pagination.module.scss";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FC } from "react";
import { useEffect, useState } from "react";

interface PaginationType {
  page: number;
  lastPage: number;
}

const firstPage = 1;
const secondPage = 2;
const defaultCentarPage = 3;

const getPaginationCentarPageValue = (pagination: PaginationType) => {
  if (pagination.page === firstPage || pagination.page === secondPage) {
    return defaultCentarPage;
  } else if (
    pagination.page === pagination.lastPage ||
    pagination.page === pagination.lastPage - firstPage
  ) {
    return pagination.lastPage - secondPage;
  }
  return pagination.page;
};

const calculateVisiblePagination = (centarPage: number) => {
  if (centarPage === firstPage) return range(centarPage, centarPage + 2, 1);
  if (centarPage === secondPage)
    return range(centarPage - 1, centarPage + 2, 1);
  return range(centarPage - 2, centarPage + 2, 1);
};

const Pagination: FC<PaginationType> = ({ page, lastPage }) => {
  const [centarPage, setCentarPage] = useState<number>(defaultCentarPage);
  const [visiblePaginationOptions, setVisiblePaginationOptions] = useState<
    Array<number>
  >([1]);
  useEffect(() => {
    setCentarPage(getPaginationCentarPageValue({ page, lastPage }));
    setVisiblePaginationOptions(calculateVisiblePagination(centarPage));
  }, [page, lastPage]);

  return (
    <div className={styles.pagination}>
      <button aria-label={"Previous page"} className={styles.item}>
        <FontAwesomeIcon icon={faAngleLeft} color="white" size={"lg"} />
      </button>
      {visiblePaginationOptions.map((page) => (
        <button
          key={page}
          aria-label={"Pagination cell"}
          className={styles.item}
        >
          {page}
        </button>
      ))}
      <button aria-label={"Next page"} className={styles.item}>
        <FontAwesomeIcon icon={faAngleRight} color="white" size={"lg"} />
      </button>
    </div>
  );
};

export default Pagination;
