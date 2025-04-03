import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((price, index) => (
        <div
          key={index}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:odd:text-color-3"
        >
          <h4 className="h4 mb-4">{price.title} </h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {price.description}{" "}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {price.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {price.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={price.price ? "/pricing" : "mailto:example@example.com"}
            white={!!price.price}
          >
            {price.price ? "Get started" : "Contact us"}
          </Button>
          <ul>
            {price.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
