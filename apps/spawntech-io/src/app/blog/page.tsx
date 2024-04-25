import { ArticlesGrid } from '@/mdx';
import { articles } from '../../config';

const BlogPage = () => {
  return <ArticlesGrid articles={articles}/>;
};

export default BlogPage;
