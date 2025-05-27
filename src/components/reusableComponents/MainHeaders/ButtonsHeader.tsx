import React, { Fragment, useCallback, useEffect } from 'react'
import { Search } from '../Buttons/Search';
import { Send } from '../Buttons/Send';
import { Filter } from '../Buttons/Filter';
import { InspectBaseDropdown } from '../Buttons/InspectBaseDropdown';
import { Sync } from '../Buttons/Sync';
import { Plus } from '../Buttons/Plus';
import { Review } from '../Buttons/Review';
import { History } from '../Buttons/History';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const ButtonsHeader: React.FC<{identifier: string}> = ({identifier}) => {
  const [inputValue, setInputValue] = React.useState<string>("");
  const [sendClicked, setSendClicked] = React.useState<boolean>(false);
  const isOption = useSelector(
    (state: RootState) => state.AdditionalInfoOption.data
  );
  const isIdentifierInspetObject = useSelector(
    (state: RootState) => state.inspectObjectIdentifier.data
  );
  const handleInputChange = useCallback((arg: string) => {
    // Handle input change logic here
    setInputValue(arg)
  },[]);

  const handleClick = useCallback(() => {
    setSendClicked(!sendClicked);

  }, [sendClicked]);
 useEffect(() => {
  console.log(sendClicked, "sendClicked")
  console.log(inputValue, "inputValue")
 },[sendClicked])
  return (
    <div className="w-full h-[7%] flex justify-center items-center">
      <div className="h-full  w-98% flex items-center justify-between">
        <div className="h-60% w-40% min-h-[30px] flex items-center gap-[0.5%]">
          <Search identifier={identifier} onChange={handleInputChange} />
          <Send onClick={handleClick} />
          {identifier === "base" && (
            
            <Filter identifier={identifier} />
          )}
        </div>
          <div className="h-60% w-30% min-h-[30px] flex items-center gap-[0.5%]">
        {identifier === "base" && (
            <InspectBaseDropdown />
          )}
          </div>
        <div className="h-[60%]  min-h-[30px] w-40%  flex items-center  gap-[1%] justify-end">
          {(isOption === "ობიექტების რეესტრი" ||
            identifier === "Settings" ||
            (isOption === "ინსპექტირების ობიექტები" &&
              isIdentifierInspetObject === "მიმდინარე დავალებები")) && (
            <Plus identifier={identifier} />
          )}
          {identifier === "base" && (
            <Fragment>
              {(isOption === "ობიექტების რეესტრი" ||
                isOption === "ინსპექტირების ობიექტები") &&
                isIdentifierInspetObject === "მიმდინარე დავალებები" && <Sync />}
              <Review />
              <History />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonsHeader;
