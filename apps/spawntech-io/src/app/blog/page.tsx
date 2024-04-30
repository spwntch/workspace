import { Blog } from '@/mdx';
import { posts, pageHeader } from '../../config';

const BlogPage = () => {
  return <Blog header={pageHeader} posts={posts} />;
};

export default BlogPage;
