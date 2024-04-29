import { Blog } from '@/mdx';
import { articles, pageHeader } from '../../config';

const BlogPage = () => {
  return <Blog header={pageHeader} articles={articles} />;
};

export default BlogPage;
