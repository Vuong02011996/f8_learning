import React, { FC } from 'react'

interface PropTypes {
  data?: {
    id: number;
    title: string;
    content: string;
  };
}

const KDLComponent:FC<PropTypes> = ({ data }) => {
    if (!data) return null;
    return (
      <div>
       <p>{data.title}</p>
       <p>{data.content}</p>
      </div>
    )
}
export default KDLComponent