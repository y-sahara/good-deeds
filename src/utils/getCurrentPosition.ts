/**
 * 現在の位置情報を取得する関数です。
 * @param options - 位置情報取得時のオプション。指定しない場合はデフォルト値が設定されます。
 * @returns Promise<GeolocationPosition> - 位置情報取得が成功した場合、位置情報を含むPromiseが返されます。
 */
const getCurrentPosition = (options?: PositionOptions): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    /**
     * Geolocationがサポートされていない場合、エラーを返します。
     */
    if (!navigator.geolocation) {
      reject(new Error('このブラウザではGeolocationがサポートされていません。'));
      return;
    }

    /**
     * 位置情報取得が成功した場合に呼び出される関数です。
     * @param position - 取得した位置情報。
     */
    const handleSuccess = (position: GeolocationPosition) => {
      console.log('位置情報取得成功:', {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy
      });
      resolve(position);
    };

    /**
     * 位置情報取得が失敗した場合に呼び出される関数です。
     * @param error - エラー情報。
     */
    const handleError = (error: GeolocationPositionError) => {
      /**
       * エラー情報をより具体的に出力
       */
      const errorDetails = {
        code: error.code,
        type: error.code === 1 ? 'PERMISSION_DENIED' :
              error.code === 2 ? 'POSITION_UNAVAILABLE' :
              error.code === 3 ? 'TIMEOUT' : 'UNKNOWN',
        message: error.message
      };
      
      console.error('位置情報取得エラー:', errorDetails);
      reject(error);
    };

    /**
     * デフォルトの位置情報取得オプションを設定します。
     */
    const defaultOptions: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 0,
      ...options
    };

    /**
     * 位置情報取得を開始します。
     */
    navigator.geolocation.getCurrentPosition(
      handleSuccess,
      handleError,
      defaultOptions
    );
  });
};

export default getCurrentPosition;