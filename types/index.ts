export interface TaggedAddress {
  address: string;
  tag: string;
}

export interface Contract {
  name: string;
  desc: string;
  version: string;
  website: string;
  priority?: number;
  addresses: TaggedAddress[];
}

export interface ABIPack {
  metadata: Contract;
  defs: any;
}
