import * as react_jsx_runtime from 'react/jsx-runtime';
import { GetStaticPaths, GetStaticProps } from 'next';

declare const TagTitle: ({ prefix }: {
    prefix?: string | undefined;
}) => react_jsx_runtime.JSX.Element;
declare const TagName: () => any;
declare const getStaticPaths: GetStaticPaths;
declare const getStaticProps: GetStaticProps;

export { TagName, TagTitle, getStaticPaths, getStaticProps };
