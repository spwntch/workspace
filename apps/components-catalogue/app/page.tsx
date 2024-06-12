import { Components } from '../components/components';
import { SiteHeaders } from '../components/site-headers';
import { Typography } from '../components/typography';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <div className="flex flex-col gap-6">
      <SiteHeaders />
      <Components />
      <Typography />
    </div>
  );
}
