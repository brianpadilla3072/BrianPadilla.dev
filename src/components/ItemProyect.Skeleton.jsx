import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { css } from '@emotion/react';

const ItemProyectSkeleton = () => {
  return (
    <article css={styles.article}>
      <div css={styles.imageWrapper}>
        <Skeleton variant="rectangular" width="100%" height={224} />
      </div>
      <div css={styles.contentWrapper}>
        <Skeleton variant="text" width="75%" height={32} />
        <div css={styles.tagsWrapper}>
          <Skeleton variant="rectangular" width={64} height={24} />
          <Skeleton variant="rectangular" width={64} height={24} />
          <Skeleton variant="rectangular" width={64} height={24} />
        </div>
        <Skeleton variant="text" width="100%" height={16} />
        <Skeleton variant="text" width="85%" height={16} />
        <div css={styles.buttonWrapper}>
          <Skeleton variant="rectangular" width={96} height={24} />
          <Skeleton variant="rectangular" width={96} height={24} />
        </div>
      </div>
    </article>
  );
};

const styles = {
  article: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 1rem;
    }
    animation: pulse 1.5s ease-in-out infinite;
  `,
  imageWrapper: css`
    width: 100%;
    @media (min-width: 768px) {
      width: 50%;
    }
  `,
  contentWrapper: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (min-width: 768px) {
      width: 50%;
    }
  `,
  tagsWrapper: css`
    display: flex;
    gap: 0.5rem;
  `,
  buttonWrapper: css`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  `,
};

export default ItemProyectSkeleton;
