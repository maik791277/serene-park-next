export default function RequisitesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-48 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center px-2">
          Реквизиты
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="max-w-none">
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center leading-tight">
                  ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ<br />
                  КОРОЛЁВ ЕВГЕНИЙ ДМИТРИЕВИЧ
                </h2>
              </div>
              
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
                
                {/* Основная информация */}
                <div className="space-y-6 order-1">
                  <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                      Основные сведения
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm sm:text-base block">Название организации:</span>
                        <span className="text-gray-900 text-sm sm:text-base block break-words">
                          ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ КОРОЛЁВ ЕВГЕНИЙ ДМИТРИЕВИЧ
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm sm:text-base block">ИНН:</span>
                        <span className="text-gray-900 font-mono text-sm sm:text-base block break-all select-all">
                          391803807952
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm sm:text-base block">ОГРНИП:</span>
                        <span className="text-gray-900 font-mono text-sm sm:text-base block break-all select-all">
                          324390000044511
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                      Юридический адрес
                    </h3>
                    <div className="space-y-2">
                      <span className="text-gray-900 text-sm sm:text-base block leading-relaxed">
                        238530, РОССИЯ, КАЛИНИНГРАДСКАЯ ОБЛ,<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>ЗЕЛЕНОГРАДСКИЙ Р-Н, Г ЗЕЛЕНОГРАДСК,<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>УЛ ЛЕНИНА, Д 7, КВ 3
                      </span>
                    </div>
                  </div>
                </div>

                {/* Банковские реквизиты */}
                <div className="space-y-6 order-2">
                  <div className="bg-green-50 p-4 sm:p-6 rounded-lg border-l-4 border-green-400">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                      Банковские реквизиты
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm sm:text-base block">Расчетный счет:</span>
                        <span className="text-gray-900 font-mono text-sm sm:text-base block break-all select-all bg-white px-2 py-1 rounded border">
                          40802810000006534719
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm sm:text-base block">Банк:</span>
                        <span className="text-gray-900 text-sm sm:text-base block">АО «ТБанк»</span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm sm:text-base block">БИК банка:</span>
                        <span className="text-gray-900 font-mono text-sm sm:text-base block break-all select-all">
                          044525974
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm sm:text-base block">ИНН банка:</span>
                        <span className="text-gray-900 font-mono text-sm sm:text-base block break-all select-all">
                          7710140679
                        </span>
                      </div>
                      <div className="space-y-2">
                        <span className="text-gray-600 font-medium text-sm sm:text-base block">Корреспондентский счет:</span>
                        <span className="text-gray-900 font-mono text-sm sm:text-base block break-all select-all bg-white px-2 py-1 rounded border">
                          30101810145250000974
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                      Адрес банка
                    </h3>
                    <div className="space-y-2">
                      <span className="text-gray-600 font-medium text-sm sm:text-base block">Юридический адрес банка:</span>
                      <span className="text-gray-900 text-sm sm:text-base block leading-relaxed">
                        127287, г. Москва, ул. Хуторская 2-я,<br className="hidden sm:block" />
                        <span className="sm:hidden"> </span>д. 38А, стр. 26
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-center text-sm sm:text-base leading-relaxed">
                  <strong>Важно:</strong> При оплате услуг обязательно указывайте в назначении платежа ваши контактные данные и период бронирования.
                </p>
              </div>

              <div className="mt-6 text-center">
                <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-6 space-y-3 sm:space-y-0 text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg">📞</span>
                    <a href="tel:+79003459591" className="hover:text-blue-600 transition-colors text-sm sm:text-base">
                      +7 (900) 345-95-91
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-lg">📧</span>
                    <a href="mailto:parkhotel@internet.ru" className="hover:text-blue-600 transition-colors text-sm sm:text-base break-all">
                      parkhotel@internet.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
