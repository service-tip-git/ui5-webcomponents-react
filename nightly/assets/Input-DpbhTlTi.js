import{j as n}from"./iframe-RECRoZhV.js";import{useMDXComponents as o}from"./index-1tzPRbI6.js";import{M as l,C as r}from"./blocks-CH1yi1wC.js";import"./Tag-BCmfqboN.js";import"./index-CfNZ4QaZ.js";import{C as c}from"./ControlsWithNote-8guUQjqU.js";import{D as p}from"./DocsHeader-D00kQhrp.js";import{F as m}from"./CommandsAndQueries-DPpsoP9s.js";import{C as i,D as a,W as u}from"./Input.stories-DlY1ktlQ.js";import"./preload-helper-PPVm8Dsz.js";import"./information-D6UQivs-.js";import"./sys-enter-2-CMoukZNH.js";import"./alert-BjbREM6S.js";import"./index-5drqvW0T.js";import"./index-DGKmMzEm.js";import"./Link-BZUDNGRG.js";import"./copy-zC_uHC7X.js";import"./copy-B_omwcq7.js";import"./GitHub-Mark-CmtAkk_i.js";import"./TableOfContent-UMLqbvXM.js";import"./index-CB0t3Ndr.js";import"./index-D1It_vMD.js";import"./index-lc4LLOiH.js";import"./index-Dk8UUcOY.js";import"./index-Rgh5WsNa.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Bozn53qz.js";import"./addCustomCSSWithScoping-Uy-s1Hcf.js";import"./Input-DlayT0fi.js";import"./ResponsivePopoverCommon.css-D2fANVRT.js";import"./ValueStateMessage.css-D4UTir1H.js";import"./Suggestions.css-CDvWi9BJ.js";import"./parameters-bundle.css-LNoaTEUu.js";import"./navigation-left-arrow-BpqWl1tL.js";import"./navigation-right-arrow-CoJr-ET_.js";import"./index-jdDMAtlA.js";function s(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(l,{of:i}),`
`,n.jsx(p,{of:i,experimental:!0}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"example",children:"Example"}),`
`,n.jsx(r,{of:a}),`
`,n.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(c,{of:a}),`
`,n.jsx(e.h2,{id:"input-with-fake-stream",children:"Input with Fake Stream"}),`
`,n.jsx(e.p,{children:"Input component implementing simple stream handling."}),`
`,n.jsx(r,{of:u}),`
`,n.jsxs("details",{children:[n.jsx("summary",{children:"Show Static Code"}),n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`function useFakeStream(typingDelay = 10, startingDelay = 1500) {
  const [value, setValue] = useState('');
  const [transitionIsPending, startTransition] = useTransition(); // active character updates
  const [isProcessing, setIsProcessing] = useState(false); // starting delay
  const [isTyping, setIsTyping] = useState(false); // actively typing characters
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  type StartStreamOptions = {
    text: string;
    onComplete?: (fullText: string) => void;
    onProcessingComplete?: () => void;
  };

  const startStream = ({ text, onComplete, onProcessingComplete }: StartStreamOptions) => {
    // Stop previous stream and timeout
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setValue('');
    setIsProcessing(true);

    timeoutRef.current = setTimeout(() => {
      setIsProcessing(false);

      if (onProcessingComplete) {
        onProcessingComplete();
      }

      setIsTyping(true);
      let index = 0;

      intervalRef.current = setInterval(() => {
        if (index < text.length) {
          const nextChar = text[index];
          index++;

          startTransition(() => {
            setValue((prev) => prev + nextChar);
          });
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setIsTyping(false);

          if (onComplete) {
            onComplete(text);
          }
        }
      }, typingDelay);
    }, startingDelay);
  };

  const stopStream = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsProcessing(false);
    setIsTyping(false);
  };

  return { value, transitionIsPending, isProcessing, isTyping, setValue, startStream, stopStream };
}

const SAMPLE_TEXTS = {
  en: 'Innovation managers lead with creativity.',
  bg: 'Мениджърите по иновации водят с креативност.',
  de: 'Innovationsmanager führen mit Kreativität.',
  expanded: 'They combine creative ideas with strategic action.',
  simplified: 'They lead using creativity.',
  summarized: 'Driving innovation creatively.',
};

const MENU_CONFIG = [
  {
    text: 'Regenerate',
    action: 'regenerate',
    processingLabel: 'Regenerating text...',
    completedLabel: 'Regenerated text',
    textKey: 'en',
    replaces: 'generate',
  },
  {
    text: 'Fix spelling and grammar',
    action: 'fixSpelling',
    processingLabel: 'Fixing spelling and grammar...',
    completedLabel: 'Fixed spelling and grammar',
    textKey: 'en',
  },
  {
    text: 'Rewrite text',
    isGroup: true,
    children: [
      {
        text: 'Simplify',
        action: 'simplify',
        processingLabel: 'Simplifying text...',
        completedLabel: 'Simplified text',
        textKey: 'simplified',
        isChild: true,
      },
      {
        text: 'Expand',
        action: 'expand',
        processingLabel: 'Expanding text...',
        completedLabel: 'Expanded text',
        textKey: 'expanded',
        isChild: true,
      },
      {
        text: 'Summarize',
        action: 'summarize',
        processingLabel: 'Summarizing text...',
        completedLabel: 'Summarized text',
        textKey: 'summarized',
        isChild: true,
      },
    ],
  },
  {
    text: 'Translate',
    isGroup: true,
    children: [
      {
        text: 'English',
        action: 'translateEN',
        processingLabel: 'Translating to English...',
        completedLabel: 'Translated to English',
        textKey: 'en',
        isChild: true,
      },
      {
        text: 'German',
        action: 'translateDE',
        processingLabel: 'Translating to German...',
        completedLabel: 'Translated to German',
        textKey: 'de',
        isChild: true,
      },
      {
        text: 'Bulgarian',
        action: 'translateBG',
        processingLabel: 'Translating to Bulgarian...',
        completedLabel: 'Translated to Bulgarian',
        textKey: 'bg',
        isChild: true,
      },
    ],
  },
];

type VersionHistoryItem = {
  action: string;
  endAction: string;
  timestamp: string;
  value: string;
};

const initialPlaceholder = 'Write your title';

function AIInput(props) {
  const [versionHistory, setVersionHistory] = useState<VersionHistoryItem[]>([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
  const [placeholder, setPlaceholder] = useState(initialPlaceholder);
  const hasHistory = versionHistory.length > 0;
  const currentActionRef = useRef<string>('');
  const { value, isTyping, isProcessing, setValue, startStream, stopStream } = useFakeStream();

  const handleVersionChange: InputPropTypes['onVersionChange'] = (e) => {
    setCurrentHistoryIndex((prev) => (e.detail.backwards ? prev - 1 : prev + 1));
  };

  const handleItemClick: InputPropTypes['onItemClick'] = (e) => {
    const { action, processingLabel, textKey } = e.detail.item.dataset;
    if (isProcessing || !action) {
      return;
    }
    currentActionRef.current = action;

    let text = SAMPLE_TEXTS[textKey ?? 'en'];
    switch (action) {
      case 'simplify': {
        text = SAMPLE_TEXTS.simplified;
        break;
      }
      case 'expand': {
        text = SAMPLE_TEXTS.expanded;
        break;
      }
      case 'summarize': {
        text = SAMPLE_TEXTS.expanded;
        break;
      }
      case 'translateEN': {
        text = SAMPLE_TEXTS.en;
        break;
      }
      case 'translateDE': {
        text = SAMPLE_TEXTS.de;
        break;
      }
      case 'translateBG': {
        text = SAMPLE_TEXTS.bg;
        break;
      }
    }

    setPlaceholder(processingLabel);
    startStream({
      text,
      onProcessingComplete: () => {
        setPlaceholder(initialPlaceholder);
      },
      onComplete: (fullText) => {
        setVersionHistory((prev) => [
          ...prev,
          { action, endAction: 'completed', timestamp: new Date().toISOString(), value: fullText },
        ]);
        setCurrentHistoryIndex((prev) => prev + 1);
        setValue('');
      },
    });
  };

  const handleStopGeneration: InputPropTypes['onStopGeneration'] = (e) => {
    stopStream();
    setVersionHistory((prev) => [
      ...prev,
      {
        action: currentActionRef.current,
        endAction: 'stopped',
        timestamp: new Date().toISOString(),
        value: e.target.value,
      },
    ]);
    setCurrentHistoryIndex((prev) => prev + 1);
    setValue('');
  };

  const handleInput: InputPropTypes['onInput'] = (e) => {
    setValue(e.target.value);
  };

  return (
    <Input
      {...props}
      style={{ width: '400px' }}
      value={isProcessing ? '' : value || versionHistory[currentHistoryIndex]?.value || ''}
      placeholder={placeholder}
      currentVersion={currentHistoryIndex + 1}
      totalVersions={versionHistory.length}
      loading={isProcessing || isTyping}
      onVersionChange={handleVersionChange}
      onStopGeneration={handleStopGeneration}
      onItemClick={handleItemClick}
      onInput={handleInput}
      actions={
        <>
          {hasHistory ? (
            MENU_CONFIG.map((configItem, index) => {
              if (configItem.replaces && !hasHistory) {
                return null;
              }

              if (configItem.isGroup && Array.isArray(configItem.children)) {
                return (
                  <MenuItem key={index} text={configItem.text}>
                    {configItem.children.map((child) => (
                      <MenuItem
                        key={child.text}
                        text={child.text}
                        data-action={child.action}
                        data-processing-label={child.processingLabel}
                        data-completed-label={child.completedLabel}
                        data-text-key={child.textKey}
                      />
                    ))}
                  </MenuItem>
                );
              }

              return (
                <MenuItem
                  key={configItem.text}
                  text={configItem.text}
                  data-action={configItem.action}
                  data-processing-label={configItem.processingLabel}
                  data-completed-label={configItem.completedLabel}
                  data-text-key={configItem.textKey}
                />
              );
            })
          ) : (
            <MenuItem key="generate" text="Generate" data-action="generate" data-processing-label="Processing..." />
          )}
        </>
      }
    />
  );
}
`})})]}),`
`,n.jsx(m,{})]})}function J(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{J as default};
