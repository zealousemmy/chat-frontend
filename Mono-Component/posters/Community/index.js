import { PosterCommunityArray } from "../../../util/Posters/Community";
import FlexLeftBody from "../../../universal-components/FlexLeft";

const PosterCommunity = () => {
  return (
    <div>
      <FlexLeftBody FlexLeftArray={PosterCommunityArray} />
    </div>
  );
};

export default PosterCommunity;
