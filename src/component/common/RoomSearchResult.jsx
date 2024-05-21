import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const RoomSearchResult = ({ results, onClearSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const resultPerPage = 3;
  const totalResults = results.length;
  const totalPages = Math.ceil(totalResults / resultPerPage);

  const handlePageChange = (pageNnumber) => {
    setCurrentPage(pageNnumber);
  };

  const startIndex = (currentPage - 1) * resultPerPage;
  const endIndex = startIndex + resultPerPage;
  const paginatedResult = results.slice(startIndex, endIndex);

  return (
    <>
      {results.length > 0 ? (
        <>
          <h5 className="text-center mt-5">Search Result</h5>
          <Row>
            {paginatedResult.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </Row>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default RoomSearchResult;
