import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    price,
    image,
    category,
    gender,
    discountPercent,
    discountedPrice,
  } = product;

  const originalPrice = Number(price ?? 0);
  const finalPrice = Number(
    discountedPrice ?? price ?? 0,
  );
  const discount = Number(discountPercent ?? 0);

  const hasDiscount =
    discount > 0 &&
    finalPrice < originalPrice;

  return (
    <article className="group">
      {/* IMAGE */}
      <Link
        to={`/product/${id}`}
        className="
          relative
          block
          overflow-hidden
          bg-base-200
          focus-visible:outline-2
          focus-visible:outline-offset-4
        "
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-[900ms]
                ease-out
                md:group-hover:scale-[1.035]
              "
            />
          ) : (
            <div
              className="
                flex
                h-full
                items-center
                justify-center
                text-xs
                text-base-content/40
              "
            >
              No Image
            </div>
          )}

          {/* DISCOUNT */}
          {hasDiscount && (
            <div
              className="
                absolute
                left-3
                top-3
                md:left-4
                md:top-4
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-1.5
                  bg-base-100/90
                  px-2
                  py-1.5
                  backdrop-blur-sm
                "
              >
                <span
                  className="
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-base-content/70
                  "
                >
                  OFF
                </span>

                <span
                  className="
                    h-2.5
                    w-px
                    bg-base-content/20
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-medium
                    tracking-[0.12em]
                    text-primary
                  "
                >
                  {discount}%
                </span>
              </div>
            </div>
          )}

          {/* QUICK VIEW */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              hidden
              translate-y-full
              border-t
              border-base-content/10
              bg-base-100
              px-4
              py-3
              text-center
              transition-transform
              duration-300
              md:block
              md:group-hover:translate-y-0
            "
          >
            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.22em]
              "
            >
              Quick View
            </span>
          </div>
        </div>
      </Link>

      {/* INFORMATION */}
      <div className="pt-2 pl-2 md:pt-5">
        {/* CATEGORY + GENDER */}
        <div className="flex items-center gap-2">
          {category && (
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.24em]
                text-base-content/45

                md:text-[10px]
                md:tracking-[0.25em]
              "
            >
              {category.name ?? category}
            </p>
          )}

          {category && gender && (
            <span className="h-2.5 w-px bg-base-content/15" />
          )}

          {gender && (
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-base-content/30

                md:text-[9px]
              "
            >
              {gender === "MEN" ? "Men" : "Women"}
            </p>
          )}
        </div>

        {/* NAME */}
        <h3
          className="
            mt-1.5
            text-xs
            font-medium
            tracking-[0.01em]

            md:mt-2
            md:text-sm
          "
        >
          {name}
        </h3>

        {/* PRICE */}
        <div className="mt-2 md:mt-2.5">
          {hasDiscount ? (
            <div className="flex items-baseline gap-2">
              <span
                className="
                  text-[9px]
                  text-base-content/80

                  md:text-sm
                "
              >
                Rp{" "}
                {finalPrice.toLocaleString(
                  "id-ID",
                )}
              </span>

              <span
                className="
                  text-[9px]
                  text-base-content/35
                  line-through

                  md:text-[10px]
                "
              >
                Rp{" "}
                {originalPrice.toLocaleString(
                  "id-ID",
                )}
              </span>
            </div>
          ) : (
            <p
              className="
                text-xs
                text-base-content/65

                md:text-sm
              "
            >
              Rp{" "}
              {originalPrice.toLocaleString(
                "id-ID",
              )}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;










// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   const {
//     id,
//     name,
//     price,
//     image,
//     category,
//     discountPercent,
//     discountedPrice,
//   } = product;

//   const originalPrice = Number(price ?? 0);
//   const finalPrice = Number(discountedPrice ?? price ?? 0);
//   const discount = Number(discountPercent ?? 0);

//   const hasDiscount =
//     discount > 0 && finalPrice < originalPrice;

//   return (
//     <article className="group">
//       {/* IMAGE */}
//       <Link
//         to={`/product/${id}`}
//         className="
//           relative
//           block
//           overflow-hidden
//           bg-base-200
//           focus-visible:outline-2
//           focus-visible:outline-offset-4
//         "
//       >
//         <div className="relative aspect-[4/5] overflow-hidden">
//           {image ? (
//             <img
//               src={image}
//               alt={name}
//               loading="lazy"
//               className="
//                 h-full
//                 w-full
//                 object-cover
//                 transition-transform
//                 duration-[900ms]
//                 ease-out
//                 md:group-hover:scale-[1.035]
//               "
//             />
//           ) : (
//             <div
//               className="
//                 flex
//                 h-full
//                 items-center
//                 justify-center
//                 text-xs
//                 text-base-content/40
//               "
//             >
//               No Image
//             </div>
//           )}

//           {/* DISCOUNT */}
//           {hasDiscount && (
//             <div
//               className="
//                 absolute
//                 left-3
//                 top-3
//                 md:left-4
//                 md:top-4
//               "
//             >
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-1.5
//                   bg-base-100/90
//                   px-2
//                   py-1.5
//                   backdrop-blur-sm
//                 "
//               >
//                 <span
//                   className="
//                     text-[8px]
//                     font-medium
//                     uppercase
//                     tracking-[0.2em]
//                     text-base-content/70
//                   "
//                 >
//                   OFF
//                 </span>

//                 <span
//                   className="
//                     h-2.5
//                     w-px
//                     bg-base-content/20
//                   "
//                 />

//                 <span
//                   className="
//                     text-[8px]
//                     font-medium
//                     tracking-[0.12em]
//                     text-primary
//                   "
//                 >
//                   {discount}%
//                 </span>
//               </div>
//             </div>
//           )}

//           {/* QUICK VIEW */}
//           <div
//             className="
//               absolute
//               inset-x-0
//               bottom-0
//               hidden
//               translate-y-full
//               border-t
//               border-base-content/10
//               bg-base-100
//               px-4
//               py-3
//               text-center
//               transition-transform
//               duration-300

//               md:block
//               md:group-hover:translate-y-0
//             "
//           >
//             <span
//               className="
//                 text-[10px]
//                 uppercase
//                 tracking-[0.22em]
//               "
//             >
//               Quick View
//             </span>
//           </div>
//         </div>
//       </Link>

//       {/* INFORMATION */}
//       <div className="pt-2 pl-2 md:pt-5">
//         {/* CATEGORY */}
//         {category && (
//           <p
//             className="
//               text-[9px]
//               uppercase
//               tracking-[0.24em]
//               text-base-content/45

//               md:text-[10px]
//               md:tracking-[0.25em]
//             "
//           >
//             {category.name ?? category}
//           </p>
//         )}

//         {/* NAME */}
//         <h3
//           className="
//             mt-1.5
//             text-xs
//             font-medium
//             tracking-[0.01em]

//             md:mt-2
//             md:text-sm
//           "
//         >
//           {name}
//         </h3>

//         {/* PRICE */}
//         <div className="mt-2 md:mt-2.5">
//           {hasDiscount ? (
//             <div className="flex items-baseline gap-2">
//               {/* CURRENT PRICE */}
//               <span
//                 className="
//                   text-[9px]
//                   text-base-content/60

//                   md:text-sm
//                 "
//               >
//                 Rp {finalPrice.toLocaleString("id-ID")}
//               </span>

//               {/* ORIGINAL PRICE */}
//               <span
//                 className="
//                   text-[9px]
//                   text-base-content/35
//                   line-through
//                   md:text-[10px]
//                 "
//               >
//                 Rp {originalPrice.toLocaleString("id-ID")}
//               </span>
//             </div>
//           ) : (
//             <p
//               className="
//                 text-xs
//                 text-base-content/65
//                 md:text-sm
//               "
//             >
//               Rp {originalPrice.toLocaleString("id-ID")}
//             </p>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductCard;