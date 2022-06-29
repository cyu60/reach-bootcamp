// Automatically generated with Reach 0.1.11 (f1ffa756)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f1ffa756)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [],
      2: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v69 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:16:56:application',
    fs: ['at ./index.rsh:15:13:application call to [unknown function] (defined at: ./index.rsh:15:17:function exp)'],
    msg: 'getFingers',
    who: 'Alice'
    });
  const v70 = stdlib.protect(ctc0, await interact.getFingersGuess(), {
    at: './index.rsh:17:59:application',
    fs: ['at ./index.rsh:15:13:application call to [unknown function] (defined at: ./index.rsh:15:17:function exp)'],
    msg: 'getFingersGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v69, v70],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:20:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:20:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v72, v73], secs: v75, time: v74, didSend: v29, from: v71 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v72, v73], secs: v75, time: v74, didSend: v29, from: v71 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v81], secs: v83, time: v82, didSend: v39, from: v80 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v45, from: v84 } = txn3;
  ;
  const v88 = stdlib.addressEq(v80, v84);
  stdlib.assert(v88, {
    at: './index.rsh:32:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v89 = stdlib.add(v72, v81);
  const v90 = stdlib.eq(v85, v89);
  const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:35:50:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:35:54:decimal', stdlib.UInt_max, '0');
  const v92 = stdlib.eq(v73, v89);
  const v93 = v92 ? stdlib.checkedBigNumberify('./index.rsh:36:54:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:36:58:decimal', stdlib.UInt_max, '0');
  stdlib.protect(ctc1, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:42:17:decimal', stdlib.UInt_max, '0'), v93, v89), {
    at: './index.rsh:46:24:application',
    fs: ['at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  stdlib.protect(ctc1, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, '1'), v91, v89), {
    at: './index.rsh:47:24:application',
    fs: ['at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v72, v73], secs: v75, time: v74, didSend: v29, from: v71 } = txn1;
  ;
  const v78 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:27:54:application',
    fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:15:function exp)'],
    msg: 'getFingers',
    who: 'Bob'
    });
  const v79 = stdlib.protect(ctc0, await interact.getFingersGuess(), {
    at: './index.rsh:28:57:application',
    fs: ['at ./index.rsh:26:11:application call to [unknown function] (defined at: ./index.rsh:26:15:function exp)'],
    msg: 'getFingersGuess',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v78],
    evt_cnt: 1,
    funcNum: 1,
    lct: v74,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v81], secs: v83, time: v82, didSend: v39, from: v80 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v81], secs: v83, time: v82, didSend: v39, from: v80 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v80, v79],
    evt_cnt: 1,
    funcNum: 2,
    lct: v82,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v85], secs: v87, time: v86, didSend: v45, from: v84 } = txn3;
      
      ;
      const v89 = stdlib.add(v72, v81);
      const v90 = stdlib.eq(v85, v89);
      const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:35:50:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:35:54:decimal', stdlib.UInt_max, '0');
      const v92 = stdlib.eq(v73, v89);
      const v93 = v92 ? stdlib.checkedBigNumberify('./index.rsh:36:54:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:36:58:decimal', stdlib.UInt_max, '0');
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v85], secs: v87, time: v86, didSend: v45, from: v84 } = txn3;
  ;
  const v88 = stdlib.addressEq(v80, v84);
  stdlib.assert(v88, {
    at: './index.rsh:32:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v89 = stdlib.add(v72, v81);
  const v90 = stdlib.eq(v85, v89);
  const v91 = v90 ? stdlib.checkedBigNumberify('./index.rsh:35:50:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:35:54:decimal', stdlib.UInt_max, '0');
  const v92 = stdlib.eq(v73, v89);
  const v93 = v92 ? stdlib.checkedBigNumberify('./index.rsh:36:54:decimal', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:36:58:decimal', stdlib.UInt_max, '0');
  stdlib.protect(ctc1, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:42:17:decimal', stdlib.UInt_max, '0'), v93, v89), {
    at: './index.rsh:46:24:application',
    fs: ['at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.seeOutcome(stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, '1'), v91, v89), {
    at: './index.rsh:47:24:application',
    fs: ['at ./index.rsh:45:7:application call to [unknown function] (defined at: ./index.rsh:45:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAECCCYCAAEAIjUAMRhBAScoZEkiWzUBJVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAAG1JJAxAADEkEkQkNAESRDQESSISTDQCEhFEKWQ1A0k1BRc1/4AEl073FzT/FlCwNAMxABJEQgBzSCM0ARJENARJIhJMNAISEURJNQUXNf+ABNUVGRQ0/xZQsDEAKUsBVwAgZ0gkNQEyBjUCQgBZSIGgjQaIAKIiNAESRDQESSISTDQCEhFESTUFSSJbNf8lWzX+gASs0R/DNP8WUDT+FlCwIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v72",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v73",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v81",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v81",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v85",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051610924380380610924833981016040819052610022916101bb565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1610085341560076100c3565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100bb9260029201906100ec565b505050610250565b816100e85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100f890610215565b90600052602060002090601f01602090048101928261011a5760008555610160565b82601f1061013357805160ff1916838001178555610160565b82800160010185558215610160579182015b82811115610160578251825591602001919060010190610145565b5061016c929150610170565b5090565b5b8082111561016c5760008155600101610171565b604080519081016001600160401b03811182821017156101b557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156101ce57600080fd5b6101d6610185565b835181526040601f19830112156101ec57600080fd5b6101f4610185565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061022957607f821691505b6020821081141561024a57634e487b7160e01b600052602260045260246000fd5b50919050565b6106c58061025f6000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806345f7039614610078578063832307571461008b578063873779a1146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461052b565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae36600461052b565b61021c565b3480156100bf57600080fd5b506100c861037b565b60405161006f92919061054e565b6100e6600260005414600d610418565b610100813515806100f957506001548235145b600e610418565b600080805560028054610112906105ab565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906105ab565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906105e0565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516101d6929190610646565b60405180910390a16101ea3415600b610418565b8051610202906001600160a01b03163314600c610418565b600080805560018190556102189060029061043d565b5050565b61022c6001600054146009610418565b6102468135158061023f57506001548235145b600a610418565b600080805560028054610258906105ab565b80601f0160208091040260200160405190810160405280929190818152602001828054610284906105ab565b80156102d15780601f106102a6576101008083540402835291602001916102d1565b820191906000526020600020905b8154815290600101906020018083116102b457829003601f168201915b50505050508060200190518101906102e9919061066d565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225338360405161031c929190610646565b60405180910390a161033034156008610418565b6040805160208082018352338083526002600055436001558351918201529091016040516020818303038152906040526002908051906020019061037592919061047a565b50505050565b600060606000546002808054610390906105ab565b80601f01602080910402602001604051908101604052809291908181526020018280546103bc906105ab565b80156104095780601f106103de57610100808354040283529160200191610409565b820191906000526020600020905b8154815290600101906020018083116103ec57829003601f168201915b50505050509050915091509091565b816102185760405163100960cb60e01b81526004810182905260240160405180910390fd5b508054610449906105ab565b6000825580601f10610459575050565b601f01602090049060005260206000209081019061047791906104fe565b50565b828054610486906105ab565b90600052602060002090601f0160209004810192826104a857600085556104ee565b82601f106104c157805160ff19168380011785556104ee565b828001600101855582156104ee579182015b828111156104ee5782518255916020019190600101906104d3565b506104fa9291506104fe565b5090565b5b808211156104fa57600081556001016104ff565b60006040828403121561052557600080fd5b50919050565b60006040828403121561053d57600080fd5b6105478383610513565b9392505050565b82815260006020604081840152835180604085015260005b8181101561058257858101830151858201606001528201610566565b81811115610594576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806105bf57607f821691505b6020821081141561052557634e487b7160e01b600052602260045260246000fd5b6000602082840312156105f257600080fd5b6040516020810181811067ffffffffffffffff8211171561062357634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b038116811461063d57600080fd5b81529392505050565b6001600160a01b038316815260608101610547602083018480358252602090810135910152565b60006020828403121561067f57600080fd5b8151801515811461054757600080fdfea2646970667358221220355d293a55b5515829912937fa286c7d9489d1111fad880e2d9ccd7c0cc81cb164736f6c634300080c0033`,
  BytecodeLen: 2340,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:24:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:31:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:37:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
