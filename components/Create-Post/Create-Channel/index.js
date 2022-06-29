import { withTheme } from "styled-components";
import { CreatePostStyles } from "../createpost";
import Form from "../../../universal-components/Form";

const CreateChannels = ({
  theme: { Color },
  HandleChange,
  HandleSubmit,
  fileName, createForm,readImage
}) => {
  return (
    <CreatePostStyles Color={Color} width={"60%"}>
      <div className={"create-post-body"}>
        <div className={"create-post-header"}>
          <h3>Create channel</h3>
        </div>
        <div>
          <Form
              FormArray={createForm}
              width={"65%"}
              form={"create channel"}
              HandleChange={HandleChange}
              HandleSubmit={HandleSubmit}
              filename={fileName}
              readImage={readImage}
          />

        </div>
      </div>
    </CreatePostStyles>
  );
};

export default withTheme(CreateChannels);
