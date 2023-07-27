/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
    ],
  }
  ```
*/
import { StarIcon } from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import BodyText from "./atoms/BodyText";
import HeadingText from "./atoms/HeadingText";
import Icon from "./atoms/Icon";

const reviews = [
  {
    id: 1,
    rating: 5,
    content: `
      This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!
    `,
    date: "July 16, 2021",
    datetime: "2021-07-16",
    author: "Emily Selman",
    avatarSrc:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  },
  {
    id: 2,
    rating: 5,
    content: `
      Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.
    `,
    date: "July 12, 2021",
    datetime: "2021-07-12",
    author: "Hector Gibbons",
    avatarSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  },
  // More reviews...
];

export default function Reviews() {
  return (
    <div className="-my-10">
      {reviews.map((review, reviewIdx) => (
        <div key={review.id} className="flex space-x-4 text-sm text-gray-500">
          <div
            className={twMerge(
              reviewIdx === 0 ? "" : "border-t border-gray-200",
              "flex-1 py-10"
            )}
          >
            <HeadingText text={review.author} level="Heading 4" />
            <BodyText text={review.date} />
            <div className="my-4 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <Icon
                  key={rating}
                  color={review.rating > rating ? "yellow" : "dark-gray"}
                  classname="h-5 w-5"
                />
              ))}
            </div>
            <BodyText text={review.content} />
          </div>
        </div>
      ))}
    </div>
  );
}
