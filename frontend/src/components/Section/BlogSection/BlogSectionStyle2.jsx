import React from 'react';
import Pagination from '../../Pagination';
import Post from '../../Post/postblog';
import Spacing from '../../Spacing';

export default function BlogSectionStyle2({ data }) {
  return (
    <div className="container">
      <div className="row cs_row_gap_50">
        {data?.map((item, index) => (
          <div className="col-xl-12 col-md-6 col-sm-12" key={index}>
            <Post {...item} />
          </div>
        ))}
      </div>
      <Spacing md="110" lg="70" />
      <Pagination />
    </div>
  );
}
