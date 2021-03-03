-- Update specific page
UPDATE  ESMAPASEPC
SET     VOLUMES = :VOLUMES
WHERE   NUMPED = :PEDIDO
    AND PAGINA = :PAGINA;

-- Select data from each page
SELECT  *
FROM    ESMAPASEPC
WHERE   NUMPED = :PEDIDO;

-- Update order header
UPDATE  PCPEDC
SET     NUMVOLUME = (
            SELECT  SUM(VOLUMES) VOLUMES
            FROM    ESMAPASEPC
            WHERE   NUMPED = :PEDIDO
        )
WHERE   NUMPED = :PEDIDO;

-- Select data from order header
SELECT  NUMVOLUME
FROM    PCPEDC
WHERE   NUMPED = :PEDIDO;