import { Block, Card, CardContent, Spacer } from "vcc-ui";

const EmptyList = () => {
  return (
    <Card>
      <CardContent>
        <Block>Oops!</Block>
        <Spacer />
        <Block>Unfortunately, there are no cars for applied filters</Block>
      </CardContent>
    </Card>
  );
};

export default EmptyList;
