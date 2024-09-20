import { useState, useEffect } from "react";
import { HealthUnit } from "@/shared/types/health-unit.type";
import { healthUnitService } from "@/shared/services/healthUnitService";

interface UsePaginationProps {
  itemsPerPage: number;
  initialPage?: number;
}

export function usePagination({
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [healthUnits, setHealthUnits] = useState<HealthUnit[]>([]);
  const [healthUnitsLoading, setHealthUnitsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Flag to check if there are more items to load

  useEffect(() => {
    const loadHealthUnits = async () => {
      try {
        setHealthUnitsLoading(true);
        // Simulate loading delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const healthUnitsRes = await healthUnitService.listHealthUnits({
          page: currentPage,
          limit: itemsPerPage,
        });
        setHealthUnits(healthUnitsRes);
        setHasMore(healthUnitsRes.length === itemsPerPage); // If returned items are less than itemsPerPage, we've reached the last page
      } catch (e) {
        // Handle error if necessary
      } finally {
        setHealthUnitsLoading(false);
      }
    };

    loadHealthUnits();
  }, [currentPage, itemsPerPage]); // Re-run the effect when currentPage or itemsPerPage changes

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (hasMore) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    currentPage,
    healthUnits,
    healthUnitsLoading,
    hasMore,
    handlePageChange,
    handleNextPage,
    handlePreviousPage,
  };
}
