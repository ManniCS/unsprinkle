import React from 'react';
import styled from 'styled-components/macro';

const SrcSet = ({ src, fileType }) => {
  console.log({src}, {fileType});
  const arr = Array.from({ length: 3 }, (_, idx) => idx); // Create an array [0, 1, 2]

  return (
    <>
      {arr.map((idx) => {
        const ratio = idx + 1;
        let modifiedSrc = src;
        if (ratio > 1) {
          modifiedSrc = src.replace('.jpg', `@${ratio}x.${fileType}`);
        }
        return (
          <source key={idx} srcSet={`${modifiedSrc} ${ratio}x`} />
        );
      })}
    </>
  );
};

const Picture = ({src}) => { 

  return (
    <picture>
      {
        ['avif', 'jpg'].map((suffix) => (
          <SrcSet key ={suffix} src={src} fileType={suffix}/>
        ))
      }
    <Image src={src} />
    </picture>
  );
}

const PhotoGridItem = ({ id, src, alt, tags }) => {
  return (
    <div>
      <article>
        <Anchor href={`/photos/${id}`}>
          <Picture src={src}/>
        </Anchor>
        <Tags>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
      </article>
    </div>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
`;

export default PhotoGridItem;
