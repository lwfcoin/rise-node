// tslint:disable max-line-length

import { ExceptionsList, ExceptionsManager, IExceptionHandler } from '../helpers';
import { ITransactionLogic } from '../ioc/interfaces/logic';
import { IBaseTransaction } from '../logic/transactions';
import { VoteAsset } from '../logic/transactions';

/**
 * Failed to apply transaction: 2628876349522661236 - Delegate tuethink registered twice
 * Affected block was: 12878075330741092126
*/

export default function exceptionTx2628876349522661236(excManager: ExceptionsManager) {
  const handler: IExceptionHandler<ITransactionLogic> = {
    canHandle(obj: ITransactionLogic, tx: IBaseTransaction<VoteAsset>) {
      return tx.id === '2628876349522661236' &&
        tx.senderPublicKey.toString('hex') === '450bddeb4d422d5132b27f62b9576d98d466f98176597c5f19951ad39468abc0' &&
        tx.signature.toString('hex') === '8a71c71f0c2fd380c8032303cd879beb1c050cc5659090d6bf74d084e600d3a24cc2aca99fbf28e5789b2b1e28eaaac1bc8ec140e66e86409f7dcdcd590e3a04';
    },
    handle() {
      return Promise.resolve([]);
    },
  };

  excManager.registerExceptionHandler(
    ExceptionsList.tx_apply,
    'tx_2628876349522661236',
    handler
  );

  excManager.registerExceptionHandler(
    ExceptionsList.tx_applyUnconfirmed,
    'tx_2628876349522661236',
    handler
  );

  return Promise.resolve();
}
