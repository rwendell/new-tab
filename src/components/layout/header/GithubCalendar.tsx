import { useEffect, useRef } from "react";

type props = {
  userName: string;
  responsive?: boolean;
  tooltips?: boolean;
  summary_text?: string;
  proxy?: (userName: string) => Promise<HTMLElement>;
  global_stats?: boolean;
  cache?: number;
};
// @ts-ignore
const GithubCalendar: React.FC<props> = (
  userName,
  responsive = false,
  tooltips = false,
  // @ts-ignore
  summary_text,
  // @ts-ignore
  proxy,
  global_stats = true,
  // @ts-ignore
  cache
) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // @ts-ignore
    githubCalendarAPI(ref.current, userName, {
      cache,
      global_stats,
      proxy,
      responsive,
      summary_text,
      tooltips,
    });
  }, [
    cache,
    global_stats,
    proxy,
    responsive,
    summary_text,
    tooltips,
    userName,
  ]);

  console.log(ref);
  return (
    <div ref={ref} id="github-container">
      now loading
    </div>
  );
};
export { GithubCalendar };
