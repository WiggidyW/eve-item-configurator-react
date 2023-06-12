
import ConfiguratorProps from "./ConfiguratorProps.js";
import Row from "./Row.js";
import Unreachable from "./Unreachable.js";

interface ItemProps {
  getMarketGroup: (idx: number) => string;
  getCategory: (idx: number) => string;
  getGroup: (idx: number) => string;
  getName: (idx: number) => string;
  getTypeId: (idx: number) => number;
  rows: Row[];
}

interface ItemConfigureProps extends ItemProps {
  getJson: (idx: number, key: string) => string;
  uniqueJsonKeys: Set<string>;
}

interface ItemToggleProps extends ItemProps {
  getEnabled: (idx: number) => boolean;
}

interface CharProps {
  uniqueChars: Set<string>;
  chars: string[];
}

interface Props {
  cfgProps: ConfiguratorProps;
  builderProps: ItemConfigureProps | ItemToggleProps | CharProps;
}

const ConfiguratorStore = (props: Props): React.ReactElement => {
  Unreachable()
}

export default ConfiguratorStore;
