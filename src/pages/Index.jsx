import { Container, Heading, Text, Button, SimpleGrid, Image, useColorModeValue, VStack, Icon } from "@chakra-ui/react";
import { FaRocket, FaBrain, FaCode, FaPlus } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10}>
        <Heading as="h1" size="3xl" textAlign="center" mb={4}>
          인공지능 기술 회사
        </Heading>
        <Text fontSize="2xl" textAlign="center" mb={8}>
          최첨단 AI 솔루션을 제공하는 한국의 선도 기업
        </Text>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEwNzQyMDMxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI Technology" />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <ProductFeature icon={FaRocket} title="고속 처리" description="빠른 알고리즘으로 데이터를 실시간으로 처리합니다." />
          <ProductFeature icon={FaBrain} title="스마트 학습" description="지속적인 학습으로 더욱 정확한 결과를 도출합니다." />
          <ProductFeature icon={FaCode} title="개발자 친화적" description="간편한 API와 다양한 개발 도구를 지원합니다." />
        </SimpleGrid>
        <Text fontSize="lg" textAlign="center" mb={8}>
          인공지능 기술 회사는 2015년에 설립되어 지속적인 연구 개발을 통해 세계 최고 수준의 인공지능 기술력을 보유하고 있습니다. 다양한 산업 분야에 최적화된 AI 솔루션을 제공하며, 고객 맞춤형 컨설팅을 통해 비즈니스 혁신을 지원하고 있습니다. 글로벌 시장 진출을 위해 해외 유수의 기업들과 파트너십을 맺고 활발히 교류하고 있습니다.
        </Text>

        <Button colorScheme="teal" size="lg" leftIcon={<Icon as={FaPlus} />}>
          더 알아보기
        </Button>
      </VStack>
    </Container>
  );
};

const ProductFeature = ({ icon, title, description }) => {
  const iconColor = useColorModeValue("teal.500", "teal.200");

  return (
    <VStack p={5} bg={useColorModeValue("white", "gray.700")} boxShadow="md" borderRadius="xl" align="start" spacing={3}>
      <Icon as={icon} w={10} h={10} color={iconColor} />
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text fontSize="md">{description}</Text>
    </VStack>
  );
};

export default Index;
