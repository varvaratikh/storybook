import React, { useState } from "react";
import { Pagination } from "@shared/components";

export const PaginationDemo = () => {
    const [page, setPage] = useState(1);
    const totalPages = 5;

    return (
        <Pagination
            onNextPageClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            onPrevPageClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disable={{ left: page === 1, right: page === totalPages }}
            nav={{ current: page, total: totalPages }}
        />
    );
};
