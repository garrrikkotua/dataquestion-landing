import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
  siteOrigin: string;
}

export default function Card({
  href,
  frontmatter,
  siteOrigin,
  secHeading = true,
}: Props) {
  const { title, pubDatetime, description } = frontmatter;
  const ogUrl = new URL(
    frontmatter.ogImage ? frontmatter.ogImage : `${title}.svg`,
    siteOrigin
  ).href;
  return (
    <div class="flex flex-col py-10 sm:flex-row sm:items-center group">
      <a href={href} class="flex overflow-hidden shrink-0 rounded-xl">
        <img
          class="w-full transition-all duration-200 sm:w-auto sm:h-32 object-cvoer group-hover:scale-110"
          src={ogUrl}
          alt=""
        />
      </a>

      <div class="flex-1 mt-6 sm:mt-0 sm:ml-6 lg:ml-8">
        <h3 class="max-w-xs text-xl font-semibold text-gray-900 transition-all duration-200 transform font-pj hover:-translate-y-1 hover:text-gray-600">
          <a href={href} title="" class="">
            {" "}
            {secHeading ? (
              <h2 className="text-lg font-medium decoration-dashed hover:underline">
                {title}
              </h2>
            ) : (
              <h3 className="text-lg font-medium decoration-dashed hover:underline">
                {title}
              </h3>
            )}{" "}
          </a>
        </h3>
        {/* <p class="mt-4 text-sm font-medium text-gray-400">19 July 2022</p> */}
        <Datetime datetime={pubDatetime} />
      </div>

      <div class="mt-6 sm:mt-0 sm:ml-6">
        <a
          href={href}
          title=""
          class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-900 transition-all duration-200 bg-transparent border border-gray-700 rounded-full hover:border-brand hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          role="button"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
