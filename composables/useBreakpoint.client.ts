const useBreakpoint = (breakpoints: Record<string, number>) => {
  const breakpoint = ref<string | undefined>(undefined);

  const handleWindowResize = () => {
    const windowWidth = window.innerWidth;

    // Encontrar el breakpoint coincidente
    const matchingBreakpoint = Object.keys(breakpoints).find(
      (key) => windowWidth <= breakpoints[key]
    );

    breakpoint.value = matchingBreakpoint;
  };

  onMounted(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleWindowResize);
  });

  return breakpoint;
};

export default useBreakpoint;
