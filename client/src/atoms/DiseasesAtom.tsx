import { Diseases } from "../Api";
import { atom } from "jotai/vanilla";

export const DiseasesAtom = atom<Diseases[]>([]);