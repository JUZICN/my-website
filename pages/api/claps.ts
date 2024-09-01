import createClapsAPI from "@upstash/claps/api";

const ClapsAPI = createClapsAPI({
  maxClaps: 100000,
});
export default ClapsAPI;
