import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
function PaginationComponent({ totalPage, page, handleChange }) {
    return (
        <div>
            <Pagination
                count={totalPage}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={handleChange}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            />
            {/*반응형 사용*/}
            {/*<Pagination*/}
            {/*    count={totalPage}*/}
            {/*    variant="outlined"*/}
            {/*    shape="rounded"*/}
            {/*    value={page}*/}
            {/*    onChange={handleChange}*/}
            {/*    siblingCount={0}*/}
            {/*    style={{*/}
            {/*        display: 'flex',*/}
            {/*        justifyContent: 'center',*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
}

export default PaginationComponent;
