import { Articles } from '@/mdx';
import { articles, pageHeader } from '../../config';

const BlogPage = () => {
  return <Articles header={pageHeader} articles={articles} />;
};

export default BlogPage;
