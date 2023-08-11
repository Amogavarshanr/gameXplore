import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MyLoader = () => {
  return (
    <Card>
      <Skeleton startColor="pink.500" endColor="orange.500" height="200px" />
      <CardBody>
        <SkeletonText startColor="pink.500" endColor="orange.500" />
      </CardBody>
    </Card>
  );
};

export default MyLoader;
