export const Symbols = {
  api    : {
    accounts          : Symbol('accountsAPI'),
    blocks            : Symbol('blocksAPI'),
    delegates         : Symbol('delegatesAPI'),
    loader            : Symbol('loader'),
    multisignatures   : Symbol('multisignaturesAPI'),
    peers             : Symbol('peersAPI'),
    signatures        : Symbol('signaturesAPI'),
    successInterceptor: Symbol('successInterceptor'),
    transactions      : Symbol('transactionsAPI'),
    transport         : Symbol('transportAPI'),
    transportV2       : Symbol('transportV2API'),
    utils             : {
      attachPeerHeaderToResponseObject: Symbol('attachPeerHeaderToResponseObject'),
      errorHandler                    : Symbol('errorHandler'),
      forgingApisWatchGuard           : Symbol('forgingApisWatchGuard'),
      successInterceptor              : Symbol('successInterceptor'),
      v2ErrorHandler                  : Symbol('v2errorHandler'),
      validatePeerHeadersMiddleware   : Symbol('validatePeerHeadersMiddleware'),
    },
  },
  generic: {
    appConfig         : Symbol('appConfig'),
    expressApp        : Symbol('expressApp'),
    genesisBlock      : Symbol('genesisBlock'),
    nonce             : Symbol('nonce'),
    redisClient       : Symbol('redisClient'),
    sequelize         : Symbol('sequelize'),
    sequelizeNamespace: Symbol('sequelizeNamespace'),
    socketIO          : Symbol('socketIO'),
    versionBuild      : Symbol('versionBuild'),
    zschema           : Symbol('z_schema'),
  },
  helpers: {
    bus              : Symbol('bus'),
    constants        : Symbol('constants'),
    db               : Symbol('dbHelper'),
    ed               : Symbol('ed'),
    exceptionsManager: Symbol('exceptionsManager'),
    jobsQueue        : Symbol('jobsQueue'),
    logger           : Symbol('logger'),
    migrator         : Symbol('migrator'),
    protoBuf         : Symbol('protoBuf'),
    sequence         : Symbol('sequence'),
    slots            : Symbol('slots'),
  },
  logic  : {
    account        : Symbol('accountLogic'),
    appState       : Symbol('appState'),
    block          : Symbol('blockLogic'),
    blockReward    : Symbol('blockRewardL'),
    broadcaster    : Symbol('broadcasterL'),
    peer           : Symbol('peerL'),
    peerFactory    : Symbol('Factory<peerL>'),
    peers          : Symbol('peersL'),
    round          : Symbol('round'),
    rounds         : Symbol('roundsL'),
    transaction    : Symbol('transactionL'),
    transactionPool: Symbol('transactionPoolL'),
    transactions   : {
      createmultisig : Symbol('createMultisigTxL'),
      delegate       : Symbol('delegateTxL'),
      secondSignature: Symbol('secondSignatureTxL'),
      send           : Symbol('sendTxL'),
      vote           : Symbol('voteTxL'),
    },
  },
  models : {
    accounts                  : Symbol('accountsModel'),
    accounts2Delegates        : Symbol('accounts2delegatesModel'),
    accounts2Multisignatures  : Symbol('accounts2multisignatures'),
    accounts2U_Delegates      : Symbol('accounts2U_delegatesModel'),
    accounts2U_Multisignatures: Symbol('accounts2U_multisignatures'),
    blocks                    : Symbol('blocksModel'),
    delegates                 : Symbol('delegatesModel'),
    exceptions                : Symbol('exceptionsModel'),
    forkStats                 : Symbol('forkStatsModel'),
    info                      : Symbol('infoModel'),
    migrations                : Symbol('migrationsModel'),
    multisignatures           : Symbol('multisignaturesModel'),
    peers                     : Symbol('peersModel'),
    rounds                    : Symbol('roundsModel'),
    roundsFees                : Symbol('roundsFeesModel'),
    signatures                : Symbol('signaturesModel'),
    transactions              : Symbol('transactionsModel'),
    votes                     : Symbol('votesModel')
  },
  modules: {
    accounts        : Symbol('accountsM'),
    blocks          : Symbol('blocksM'),
    blocksSubModules: {
      chain  : Symbol('blocks_submodule_chain'),
      process: Symbol('blocks_submodule_process'),
      utils  : Symbol('blocks_submodule_utils'),
      verify : Symbol('blocks_submodule_verify'),
    },
    cache           : Symbol('cacheM'),
    delegates       : Symbol('delegatesM'),
    forge           : Symbol('forgeM'),
    fork            : Symbol('forkM'),
    loader          : Symbol('loaderM'),
    multisignatures : Symbol('multisignaturesM'),
    peers           : Symbol('peersM'),
    rounds          : Symbol('roundsM'),
    system          : Symbol('systemM'),
    transactions    : Symbol('transactionsM'),
    transport       : Symbol('transportM'),
  },

  tags: {
    helpers: {
      balancesSequence: Symbol('balanceSequence'),
      dbSequence      : Symbol('dbSequence'),
      defaultSequence : Symbol('defaultSequence'),
    },
  },

  __others: {
    metadata: {
      // USed to decorate the class with the symbol attached to it.
      classSymbol: Symbol('classSymbol'),
    },
  },
};
