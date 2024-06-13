import { Blog } from '@/blog';
import { posts, pageHeader } from '../../config';

const BlogPage = () => {
  return <Blog header={pageHeader} articles={posts} />;
};

export default BlogPage;
