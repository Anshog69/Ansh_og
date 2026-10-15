// Sound engine stub (all audio disabled per user instruction to remove all audio & music)

class SoundEngine {
  public toggleMute(): boolean {
    return true;
  }
  public getIsMuted(): boolean {
    return true;
  }
  public hoverTick() {}
  public clickBlip() {}
  public terminalBeep() {}
  public successChime() {}
  public glitchSweep() {}
  public matrixChirp() {}
  public errorBeep() {}
  public hoverPop() {}
}

export const soundEngine = new SoundEngine();
