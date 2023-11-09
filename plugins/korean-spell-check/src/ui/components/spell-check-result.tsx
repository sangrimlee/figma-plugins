import { Flex, Text, colors, styled } from '@figma-plugins/ui';
import {
  CheckCircledIcon,
  Cross1Icon,
  DotFilledIcon,
} from '@radix-ui/react-icons';
import type { SpellCheckResult } from '@/shared/types';

interface SpellCheckResultListProps {
  results: SpellCheckResult[];
}

export function SpellCheckResultList({
  results = [],
}: SpellCheckResultListProps) {
  if (results.length === 0) {
    return (
      <Flex
        css={{
          marginTop: '$800',
        }}
        items="center"
        justify="center"
      >
        <Flex
          css={{
            padding: '$150 $250',
            borderRadius: '$md',
            color: colors.text.success.default,
            backgroundColor: colors.bg.success.tertiary,
          }}
          gap="100"
          items="center"
        >
          <CheckCircledIcon height={16} width={16} />
          <Text size="sm" variant="success" weight="medium">
            수정할 내용이 없습니다.
          </Text>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex as="ul" direction="column" gap="400">
      {results.map((result) => (
        <li key={result.origin}>
          <SpellCheckResultItem result={result} />
        </li>
      ))}
    </Flex>
  );
}

const reasonLabel = {
  WRONG_SPACING: '띄어쓰기 오류',
  WRONG_SPELLING: '맞춤법 오류',
  AMBIGUOUS: '표준어 의심',
  STATISTICAL_CORRECTION: '통계적 교정',
} as const;

interface SpellCheckResultItemProps {
  result: SpellCheckResult;
}

export function SpellCheckResultItem({ result }: SpellCheckResultItemProps) {
  return (
    <Wrapper>
      <Flex
        css={{
          position: 'relative',
          marginBottom: '$150',
        }}
        items="center"
      >
        <ReasonIcon height={16} reason={result.reason} width={16} />
        <Text size="sm" variant="secondary">
          {reasonLabel[result.reason]}
        </Text>
      </Flex>

      <Flex direction="column" gap="200" items="start">
        <OriginText breakWord={false} size="sm">
          {result.origin}
        </OriginText>
        <CorrectText breakWord={false} size="sm" weight="semibold">
          {result.correct}
        </CorrectText>
      </Flex>

      <RemoveButton>
        <Cross1Icon height={12} width={12} />
      </RemoveButton>
    </Wrapper>
  );
}

const Wrapper = styled('div', {
  position: 'relative',
  borderWidth: '$1',
  borderRadius: '$md',
  padding: '$300 $600',
});

const ReasonIcon = styled(DotFilledIcon, {
  position: 'absolute',
  right: '100%',
  marginRight: '$50',
  variants: {
    reason: {
      WRONG_SPACING: {
        color: '#FFC53D',
      },
      WRONG_SPELLING: {
        color: '#E54D2E',
      },
      AMBIGUOUS: {
        color: '#6E56CF',
      },
      STATISTICAL_CORRECTION: {
        color: '#7CE2FE',
      },
    },
  },
});

const OriginText = styled(Text, {
  textDecoration: 'underline',
  textDecorationStyle: 'wavy',
  textDecorationColor: colors.text.danger.default,

  '&::after': {
    content: '→',
    display: 'inline-block',
    marginLeft: '$100',
    color: colors.text.secondary.default,
  },
});

const CorrectText = styled(Text, {
  padding: '$100 $200',
  borderRadius: '$md',
  color: colors.text.onbrand.default,
  backgroundColor: colors.bg.brand.default,
});

const RemoveButton = styled('button', {
  position: 'absolute',
  top: '$200',
  right: '$200',
  padding: '$100',
  transitionProperty: '$transitions$colors',
  transitionDuration: '$transitions$200',
  transitionTimingFunction: '$transitions$ease-in-out',
  color: colors.icon.secondary.default,
  borderRadius: '$md',
  '&:hover': {
    color: colors.icon.secondary.hover,
    backgroundColor: colors.bg.secondary,
  },
});
