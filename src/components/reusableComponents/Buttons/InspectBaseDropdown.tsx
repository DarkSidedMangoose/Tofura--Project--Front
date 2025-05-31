import { Fragment, memo } from "react";
import { UseContextAuthenticatedUserInfo } from "../../../contextApis/ContextAuthenticatedUserInfo";
import { AppDispatch, RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setInspectBaseIdentifier } from "../../../redux/reducers/InspectObjectIdentifierState";
import "./InspectBaseDropdown.css"; // Assuming you have a CSS file for styles

export const InspectBaseDropdown: React.FC = memo(() => {
  const { authenticatedUserInfo } = UseContextAuthenticatedUserInfo();

  const dispatch: AppDispatch = useDispatch();

  const clickHandler = (arg: string) => {
    dispatch(setInspectBaseIdentifier(arg));
    localStorage.setItem("inspetBaseIdentifier", arg);
  };
  const isIdentifierInspetObject = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  
  return (
    <Fragment>
      {isOption === "ინსპექტირების ობიექტები" && (
        <section className="flex w-full  h-full   justify-center items-center gap-[1%] text-md ">
          <select
            id="dropdown"
            name="options"
            value={isIdentifierInspetObject}
            className="bg-sidebarChoose text-white w-full h-full font-semibold opacity-90 rounded-xl text-sm custom-select  "
            onChange={(e) => clickHandler(e.target.value)}
          >
            <option
              value="მიმდინარე დავალებები"
              className="bg-white text-sidebarChoose text-start   "
            >
              მიმდინარე დავალებები
            </option>
            {authenticatedUserInfo.level !== 1 && (
              <Fragment>
                <option
                  value="გაცემული დავალებები"
                  className="bg-white text-sidebarChoose"
                >
                  გაცემული დავალებები
                </option>
                <option
                  value="გამოგზავნილი დასრულების მოთხოვნები"
                  className="bg-white text-sidebarChoose"
                >
                  გამოგზავნილი დასრულების მოთხოვნები
                </option>
              </Fragment>
            )}
            <option
              value="გაგზავნილი დასრულების მოთხოვნები"
              className="bg-white text-sidebarChoose"
            >
              გაგზავნილი დასრულების მოთხოვნები
            </option>
          </select>
        </section>
      )}
    </Fragment>
  );
});
