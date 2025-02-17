import React, { Fragment, memo } from "react";
import { BaseMain } from "./mainBaseSubComponents/main/BaseMain";
import { useAdditionalOption } from "../../../../contextApis/ContextChooseFromAdditional";
import DashboardMain from "./mainDashboardSubComponents/main/DashboardMain";

export const MainMainMainSection: React.FC = memo(() => {
  const { isOption } = useAdditionalOption();

  return (
    <Fragment>
      {isOption === "ობიექტების რეესტრი" ||
      isOption === "ინსპექტირების ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "ახალი ობიექტები" ||
      isOption === "შემოწმებული ობიექტების რეესტრი" ||
      isOption === "წაშლილი ობიექტები" ? (
        <div className="w-full  h-[80%] ">
          <BaseMain />
        </div>
      ) : isOption === "ობიექტების რეგიონალური რუკა" ||
        isOption === "ობიექტების დიაგრამული გამოსახულება" ? (
        <section className="w-[98%] h-90% flex justify-center items-center  ">
          <div className="w-full h-100% gap-[2%] ">
            <DashboardMain />
          </div>
        </section>
      ) : null}
    </Fragment>
  );
});
